export default function stories() {
    const{id} = useParams();
    const{loading, error, data} = useQuery({variables:{id}});

    if (loading) return <Spinner/>;
    if (error) return <p>There was an error loading the page. Please try again. If there is still a problem please contacts us.</p>;

    return <>
        {!loading && !error && (
            <div>
                <h1>{data.charity.name}</h1>
                <p>{data.description}</p>
                <img/>
            </div>
        )}
    </>;
}