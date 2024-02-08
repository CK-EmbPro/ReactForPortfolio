type PanelTypes = {
    title: string;
    children: React.ReactNode
}
const Panel = ({title, children}: PanelTypes) => {
  return (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default Panel