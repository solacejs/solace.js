import Main from "@/components/Main";

export default function Class({ params }: { params: { slug: string } }) {
    return <Main name={params.slug} />
}