import { headers } from 'next/headers'
import crypto from 'crypto'

// Webhook secret should match what you set in Ghost Admin
const webhookSecret = process.env.GHOST_WEBHOOK_SECRET

// Vercel deploy hook URL from your project settings
const vercelDeployHook = process.env.VERCEL_DEPLOY_HOOK_URL

export async function POST(request: Request) {
  try {
    // Get the Ghost webhook signature
    const headersList = await headers();
    const signature = headersList.get('x-ghost-signature');
    
    // Log the received signature header
    console.log("Received x-ghost-signature header:", signature);

    if (!webhookSecret) {
      return new Response('Webhook secret not configured', { status: 500 })
    }

    if (!vercelDeployHook) {
      return new Response('Vercel deploy hook not configured', { status: 500 })
    }

    if (!signature) {
      return new Response('No signature found', { status: 401 })
    }

    // Get the raw body as text
    const body = await request.text()
    
    // Verify webhook signature
    const computedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')
    
    // Log the computed signature for comparison
    console.log("Computed signature starts with:", computedSignature.substring(0, 10));

    if (signature !== computedSignature) {
      // Log the mismatch
      console.error("Signature mismatch. Received:", signature, "Computed:", computedSignature);
      return new Response('Invalid signature', { status: 401 })
    }

    // Trigger Vercel deployment
    const response = await fetch(vercelDeployHook, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Failed to trigger deployment')
    }

    return new Response('Deployment triggered successfully', { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response('Internal server error', { status: 500 })
  }
} 