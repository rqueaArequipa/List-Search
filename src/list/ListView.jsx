function ListView({elements, funcfilterItems}){
    return (
        <div>
            <input type="text" onChange={ev => funcfilterItems(ev.target.value)} />
        <ul>
            {
                elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
            }
        </ul>
        </div>
    )
}

export default ListView