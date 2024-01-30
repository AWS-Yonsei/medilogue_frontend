import {Link} from "react-router-dom";

const Menu=() => {
    return (
        <div className="">
        <nav id='navbar' className=" flex bg-blue-200 rounded">
            <div className="w-4/5 bg-grey-500">
                <ul className="flex p-4 text-black fond-bold">
                    <li className="pr-6 text-2xl">
                        <Link to={'/'}>Home</Link>                        
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/about'}>About</Link>                        
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/blog'}>Blog</Link>                        
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/pages'}>Pages</Link>                        
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/contact'}>Contact</Link>                        
                    </li>
                </ul>
            </div>
            <div className="w-4/5 flex justify-end p-4 font-medium">
                <div className="text-black text-sm m-1 rounded">
                    Sign In
                </div>
                <div className="text-black text-sm m-1 rounded">
                    Register
                </div>
            </div>
        </nav>
        </div>
    );
}
export default Menu;