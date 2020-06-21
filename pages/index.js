import Link from 'next/link'
import Date from 'components/date'
import Layout from 'components/layout'
import { getSortedPostsData } from 'lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <h1 className="text-3xl my-4">Blog</h1>
      {allPostsData.map(({ id, date, title }) => (
        <article key={id} className="p-4 my-4 bg-white rounded overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="w-full rounded-lg sm:w-88 md:w-56"
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                alt="Woman paying for a purchase"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <Link href={`/posts/${id}`}>
                <a className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{title}</a>
              </Link>
              <Date dateString={date} />
            </div>
          </div>
        </article>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
