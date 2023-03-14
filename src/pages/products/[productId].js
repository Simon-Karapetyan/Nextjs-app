import { useRouter } from 'next/router';
import styles from './Products.module.css';
import Link from "next/link";

export default function ProductId() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <div>
            <Link href='/products'>
                back
            </Link>

            <h1 className={styles.product__title}>
                Product { productId }
            </h1>
        </div>
    )
}
