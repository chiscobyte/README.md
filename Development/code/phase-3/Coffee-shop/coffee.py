class Coffee:
    all_coffees = []  

    def __init__(self, name, price):
        self.price = price
        self._name = None  
        self.name = name  

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if self._name is not None:
            raise AttributeError("Cannot change coffee name after it is set.")
        if not isinstance(value, str) or len(value) < 3:
            raise ValueError("Coffee name must be a string with at least 3 characters.")
        self._name = value
        Coffee.all_coffees.append(self) 

    @classmethod
    def display_menu(cls):
        if not cls.all_coffees:
            return "No coffee available."
        return "\n".join(f"{coffee.name}: ${coffee.price:.2f}" for coffee in cls.all_coffees)

    def __repr__(self):
        return f"Coffee(name={self.name!r}, price={self.price:.2f})"