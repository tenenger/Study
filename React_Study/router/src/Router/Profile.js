import {
    useParams,
    useLocation,
    useSearchParams,
    useNavigate,
} from "react-router-dom";

function Profile() {
    // useParams
    const { username } = useParams();

    // useLocation
    const location = useLocation();

    // useSearchParams
    // const [searchParams] = useSearchParams();
    // const keyWords = searchParams;
    // const keyWord = searchParams.get("search");

    // useNavigate
    const pageMove = useNavigate();
    console.log(pageMove);

    return (
        <>
            {/* useParams */}
            <div>ID가 {username} 입니다.</div>
            <br />

            {/* useLocation */}
            <div>hash : {location.hash}</div>
            <div>pathname : {location.pathname}</div>
            <div>search : {location.search}</div>
            <div>state : {location.state}</div>
            <div>key : {location.key}</div>
            <br />

            {/* useSearchParams */}
            {/* <div>keyWords : {keyWords}</div>
            <div>keyWord : {keyWord}</div> */}

            {/* useNavigation */}
            <button
                onClick={() => {
                    pageMove(-1);
                }}
            >
                뒤로가기
            </button>
            <button
                onClick={() => {
                    pageMove(1);
                }}
            >
                앞으로가기
            </button>
            <button
                onClick={() => {
                    pageMove("/");
                }}
            >
                홈페이지로
            </button>
        </>
    );
}

export default Profile;
