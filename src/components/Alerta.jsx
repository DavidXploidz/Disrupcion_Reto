
export default function Alerta({children}) {
  return (
    <div className="alert alert-danger py-1 mt-3 text-center" role="alert">
        {children}
    </div>
  )
}
