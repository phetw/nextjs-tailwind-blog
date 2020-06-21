import Link from 'next/link'
import Date from 'components/date'
import Layout from 'components/layout'
import { getPostData, getAllPostIds } from 'lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Link href="/">
        <p className="my-4 text-xs text-teal-500 cursor-pointer">Home</p>
      </Link>

      <div className="container p-4 rounded shadow-lg bg-white">
        <h1 className="text-3xl">{postData.title}</h1>
        <Date dateString={postData.date} />
        <section className=" mt-4 text-sm" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
