import axios from "axios";
import useAsync from "./useAsync";

async function getUsers(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User({ id }) {
    // 콜백함수로 진짜 함수를 넣을 경우에는 콜백함수라는 표시를 해주어야한다.
    const [state] = useAsync(() => getUsers(id), [id]);
    const { data: user, loading, error } = state;
    return (
        <div>
            {loading ? (
                <h2>로딩중....</h2>
            ) : error ? (
                <h2>에러가 발생했습니다.</h2>
            ) : !user ? (
                <h2>API 정보가 없습니다.</h2>
            ) : (
                <>
                    <h2>{user.username}</h2>
                    <p>
                        <b>Email: {user.email}</b>
                    </p>
                </>
            )}
        </div>
    );
}

export default User;
