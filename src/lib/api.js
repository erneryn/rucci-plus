import { createBucketClient } from '@cosmicjs/sdk';

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
});

const is404 = (error) => /not found/i.test(error.message);

export async function getAllDataWithSlug() {
  const params = {
    type: 'menu',
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getDataFromBucket(type) {
  console.log(type)
  try {
    const data = await bucket.objects.find({
      type
    })
    .props(['title,slug,metadata,created_at'])
    return data.objects
  } catch (error) {
    return null
  }
  
}