
function DragBox(props) {
    return <div style={{ cursor: "grab" }} id={props.id} draggable={true} onDragOver={(ev) => ev.preventDefault()}
        onDragStart={props.handleDrag}
        onDrop={props.handleDrop}>
        {props.children}
    </div>;
}

export default DragBox;