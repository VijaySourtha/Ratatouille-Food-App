import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../../utils/Icons";
import CartPopup from "./CartPopup";

const CartFooter = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
        <>
        {cartItems.length > 0 && (
          <div className="fixed bottom-0 right-0 h-10 bg-[#3d9b6d] text-xs text-white flex justify-between items-center px-4 rounded-tl-md">
            <span>{cartItems.length} item added</span>
            <span>
              <button onClick={openPopup} className="bg-white text-[#3d9b6d] px-2 py-1 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3d9b6d]">
                Open Cart
              </button>
              <CartPopup isOpen={isPopupOpen} onClose={closePopup} />
            </span>
          </div>
        )}
      </>
    );
  };

export default CartFooter;