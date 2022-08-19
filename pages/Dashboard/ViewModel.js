import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../../src/store/actions/cart"
import Item from "./Item"
import data from "../../src/constant/products.json"

const ViewModel = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state?.cart);
    console.log(cart)
    const incrementItem = ({ id, name, image, description }) => {
        console.log("clicked increment")
        const params = {
            id: id,
            name: name,
            image: image, 
            description: description,
            quantity: 1
        }

        dispatch(increment(params))
    }
    
    const decrementItem = (id) => {
        console.log("clicked decrement")
        dispatch(decrement(id))
    }

    const renderItem = ({ item }) => {
        return (
            <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                description={item.description} 
                quantity={item.quantity}
                increment={() => incrementItem(item)}
                decrement={() => decrementItem(item.id)}/>
        )
    }

    const getData = () => {
        
        console.log("getData")
        let items = data.data
        
        items.map(item => {
            if (cart.cart) {
                let res = cart.cart.filter(c => {
                    return c.id === item.id
                })

                if (res.length > 0) {
                    items.find(i => i.id === item.id).quantity = res[0].quantity
                } else {
                    items.find(i => i.id === item.id).quantity = 0
                }
            } else {
                items.find(i => i.id === item.id).quantity = 0
            }
        })

        return items
    }

    return {
        renderItem,
        incrementItem,
        decrementItem,
        getData
    }
}

export default ViewModel;