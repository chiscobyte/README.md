class Order:
    all_orders = []  

    def __init__(self, customer, coffee, price):
        from customer import Customer  
        from coffee import Coffee  

        if not isinstance(customer, Customer):
            raise TypeError("Customer must be an instance of Customer class")
        if not isinstance(coffee, Coffee):
            raise TypeError("Coffee must be an instance of Coffee class")
        if not isinstance(price, float) or not (1.0 <= price <= 10.0):
            raise ValueError("Price must be a float between 1.0 and 10.0")

        self.customer = customer
        self.coffee = coffee
        self.price = price
        Order.all_orders.append(self) 

    def __repr__(self):
        return (f"Order(customer={self.customer.name!r}, coffee={self.coffee.name!r}, "
            f"price={self.price:.2f})")