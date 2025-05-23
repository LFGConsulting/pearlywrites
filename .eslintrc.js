module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;']
          },
          {
            char: '}',
            alternatives: ['&#125;']
          }
        ]
      }
    ]
  }
} 