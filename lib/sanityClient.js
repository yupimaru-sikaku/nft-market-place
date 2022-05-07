import sanityClient from '@sanity/client'

export const client = sanityClient({
  // sanityでわかる
  projectId: 'dqd5aylc',
  dataset: 'production',
  apiVersion: '2021-03-25',
  //   SanityのCORSにURL入力するの忘れないで✓も忘れず！！
  // Add API TokenでEditor名前は任意

  token:
    'skBmPFRn8NDpPLUYdkOtR87gdncuPt9M2V3s8TVLm0Phk22F09y5NjdUH8Nziw5IyuPAJaN3s28wa0s3ZssjTt2WpXr4rFH3lodaAP2nx5HjIGHBbG3Gxtzog9WUZ11xoMs97ewQkEAnCW0RLAGdt2mJFfP4xSXliHIzhxxzLmySIHrmBHy7',
  useCdn: false,
})
