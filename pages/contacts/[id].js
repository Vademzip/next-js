import Head from "next/head";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    console.log(data);
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contact: data}, //это попадает в props
    }
};
const Id = ({contact}) => {

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    )
};

export default Id;
