import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";
import { useState } from "react";

async function getUsers() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState(null);
    const [state, refresh] = useAsync(getUsers, [], true);
    const { data: users, loading, error } = state;
    return (
        <div>
            {loading ? (
                <h2>로딩중....</h2>
            ) : error ? (
                <h2>에러가 발생했습니다.</h2>
            ) : !users ? (
                <h2>API 정보가 없습니다.</h2>
            ) : (
                <>
                    <ul>
                        {users.map((user) => (
                            <li
                                key={user.id}
                                onClick={() => {
                                    setUserId(user.id);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                {user.username} ({user.name})
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={refresh}>API 다시 불러오기</button>
            {userId ? <User id={userId} /> : null}
        </div>
    );
}

export default Users;
