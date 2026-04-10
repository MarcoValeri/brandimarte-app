import Link from "next/link";

const ButtonQuote = () => {
    return (
        <Link href="/preventivo-online" className="no-underline hover:no-underline">
            <span className="inline-block w-auto relative p-[3px] rounded-[5px] animate-flow bg-[size:50rem] bg-[linear-gradient(240deg,#008000_0%,#fff_49%,#008000_80%,#008000_100%)] hover:bg-[linear-gradient(240deg,#008000_0%,#ffff00_49%,#008000_80%,#008000_100%)]">
                <span className="block bg-gray-100 text-[#000080] py-2 px-4 rounded-[3px]">
                    Preventivo online gratuito
                </span>
            </span>
        </Link>
    );
};

export default ButtonQuote;
