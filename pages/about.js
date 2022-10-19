import Head from 'next/head'
import { useRouter } from 'next/router'

function AboutPage() {
  const router = useRouter()
  const name = ' sol '
  console.log(router.query)
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Page</h1>
      <p> hello, {name}! </p>
    </div>
  )
}

export default AboutPage
