import Main from "@/components/Main";

export default function Interface({ params }: { params: { slug: string } }) {
    return <Main name={params.slug} />
}