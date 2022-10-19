import React from 'react'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <h2>페이지를 찾을수 없습니다</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  )
}
