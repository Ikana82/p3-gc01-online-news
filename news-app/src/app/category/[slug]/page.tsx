export default async function Detail({
     params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params; 
  
  return <h1>Category: {slug}</h1>
}