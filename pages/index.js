import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      In index
      <ul>
            <li>
                <Link href="/home">
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}
