export default function Page({ params }: { params: { slug: string } }) {
    return <div>Esta es la caja de nombre: {params.slug}</div>
  }