interface IResults {
    results: any
}

export default function Results({ results }: IResults) {
    return (
        <div>
            {results.map((result: any) => {
                return (
                    <div key={result.id}>
                        {result.original_title}
                    </div>
                )
            })}
        </div>
    )

}