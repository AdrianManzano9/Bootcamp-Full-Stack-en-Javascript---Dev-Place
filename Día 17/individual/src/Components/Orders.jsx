import { useState, useEffect } from "react";


export function Orders() {

  const [users, setUsers] = useState([]);
  const mostrarUsers = async () => {
    await fetch('http://127.0.0.1:5050/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem("token")
      }
    }).then(response => response.json()).then(e => {
      console.log(e.data)
      setUsers(e.data);
    })
  }
  useEffect(() => {
    mostrarUsers()
  }, [])

  return (
    <>
      {users.map(user => {
          user.orders.map(order => {
            return (
              <div id="FreQuestions" key={user.id}>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" >
                      Cliente: {user.surname+", "+user.name+"  / email: "+user.email+" / Entregar en: "+order.direction+" / Pago con: "+order.tPago+" $"+order.total+" el "+order.time}
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    {order.dOrders.map(dOrder=> { 
                      return(
                      <div className="accordion-body" key={dOrder.id}>
                        <p>{dOrder.cant+" "+dOrder.descrip+"  a $"+dOrder.precio}</p>
                      </div>
                      )
                      })}
                    </div>
                  </div>

                </div>
              </div>
            )
          })
      })}
    </>
  )


}