import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
    return (
        <>
            <div className="container flex justify-between items-center mx-auto w-full my-3 p-2 gap-10 text-gray-800">
                <div className="flex items-center gap-9">
                    <svg id="Group_205728" data-name="Group 205728" xmlns="http://www.w3.org/2000/svg" width="151.848" height="36" viewBox="0 0 151.848 62.372">
                        <g id="Group_208975" data-name="Group 208975" transform="translate(0 0)">
                            <path id="Path_1" data-name="Path 1" d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321" transform="translate(-268.85 -104.669)" fill="#1a2024" />
                            <path id="Path_2" data-name="Path 2" d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z" transform="translate(-776.859 -0.1)" fill="#1a2024" />
                            <path id="Path_3" data-name="Path 3" d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z" transform="translate(-513.351 -105.768)" fill="#ed1c24" />
                            <path id="Path_4" data-name="Path 4" d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4" transform="translate(0 0.001)" fill="#1a2024" />
                        </g>
                    </svg>

                    <Link to="/" className="ml-4 text-decoration-none">Home</Link>
                    <Link to="/Addproduct" className="ml-4 text-decoration-none">Add Products</Link>
                    <Link to="/Myproduc" className="ml-4 text-decoration-none">My products</Link>
             
                    <Link to="#" className="ml-4 text-decoration-none">Contact</Link>
                </div>

                {/* Search bar and icons */}
                <div className="flex items-center">
                    <div className="relative">
                        <input type="text" className="border h-10 rounded-full w-80 px-4 pl-10 focus:outline-none" placeholder="Search" />
                        <i className="absolute top-3 left-3 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
                            </svg>
                        </i>
                    </div>
                    <FaRegUser className="text-gray-600 mr-2 text-xl" />
                    <AiOutlineShopping className="text-black text-2xl" />
                </div>
            </div>

            <hr />


        </>
    );
}

export default Header;
