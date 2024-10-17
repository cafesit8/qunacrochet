import { Product } from '../../interface/Product'
import ProductItem from '../components/Product'

interface Props {
  productsList: Product[]
  updateQuantity: (productId: string, newQuantity: number) => void
  handleRemoveProduct: (id: string) => void
}

export default function Products ({ productsList, updateQuantity, handleRemoveProduct }: Props) {
  return (
    <section className="md:w-4/6 w-full flex flex-col">
      {productsList.map((product) => (
        <ProductItem key={product.id} product={product} updateQuantity={updateQuantity} removeProduct={handleRemoveProduct} />
      ))}
    </section>
  )
}
