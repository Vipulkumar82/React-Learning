function TodoCard({data}){
    console.log(data)
    return(
        <section>
            <p>Title : {data.title}</p>
            <p>Description : {data.desc}</p>
            <p>Progres : {data.progres}</p>
        </section>
    )
}
export default TodoCard;
