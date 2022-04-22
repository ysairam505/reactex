import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div class = "container" style={{margin:"10px" , width:"750px"}}>

      <div class="row row-cols-1 row-cols-md-2 ">
      <div class="col mb-2"></div>
      <div class="col mb-2">
          <Link to="/add-user" style={{float:"right"}}>
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 ">
        {entities.length &&
                  entities.map(({ id, name, email, image, phone, website }, i) => (
          <div class="col mb-4">
              <div class="card">
                <div className='container' style={{background:"##f0f2f0"}}>
                  <img class="card-img-top  container" src={image} alt="Card image cap" 
                  style={{width:"75%"}} />
                </div>
                <div class="card-body" style={{color:"black"}}>
                <h5 class="card-title" >{name}</h5>
                <p class="card-text"><i class="bi bi-envelope"></i> {email} </p>
                <p class="card-text"><i class="bi bi-telephone"></i> {phone} </p>
                <p class="card-text"><i class="bi bi-globe"></i> {website} </p>

                <ul class="list-group list-group-horizontal">
                  <li class="list-group-item col text-center">
                    <button><Link to={`/edit-user/${id}`}>  <i type = "button" class="bi bi-pen"></i> </Link></button>
                  </li>
                  <li class="list-group-item col text-center">
                    <i type = "button" class="bi bi-trash" onClick={() => handleDelete(id) }/>
                  </li>
                </ul>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
