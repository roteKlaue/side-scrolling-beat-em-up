const removeAllChildNodes = (id: string) => {
    const myNode = document.getElementById(id) as HTMLElement;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild as ChildNode);
    }
}

export default removeAllChildNodes;