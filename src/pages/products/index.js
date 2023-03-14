import Link from 'next/link';
import styles from './Products.module.css';

export default function Products() {
    return (
        <div>
            <Link href='/'>
                back
            </Link>

            <ul>
                <li>
                    <Link href='/products/1'>
                        Product 1
                    </Link>
                </li>
                <li>
                    <Link href='/products/2'>
                        Product 2
                    </Link>
                </li>
                <li>
                    <Link href='/products/3'>
                        Product 3
                    </Link>
                </li>
            </ul>
        </div>
    )
}
