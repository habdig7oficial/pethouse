export interface props {
    title: string,
    text: string,
    img_link: string,
    alt: string
}

export default function Card({ title = '', text = '', img_link = '', alt = '' }: props) {
    return (
        <>
            <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-title">
                    <h3 className="text-center">{ title }</h3>
                </div>
                <img style={{maxWidth: "10rem"}} src={ img_link } className="card-img-top mx-auto" alt={alt} />

                <div className="card-body d-flex flex-column justify-content-center flex-wrap">
                    <p className="card-text text-wrap text-justify">{text}</p>

                    <input value="Vizualize o Produto Agora" type="button" className="btn btn-secondary text-wrap" />
                </div>
            </div>
        </>
    )
}