import HEAD from "next/head";


const Stream = (props) => {

    return (
        <div>Hellow World {props.stream}!</div>
    )
}

export const getServerSideProps = async( {params}) => {

    console.log (params.stream);
    return {props: {stream: params.stream} };
}

export default Stream;
