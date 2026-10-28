// Exercise 1: Read the menu
console.log('\n=== Exercise 1: Read the menu ===')
const menuItems = ['Tea', 'Coffee', 'Sandwich', 'Cookie']

console.log(menuItems[0])
console.log(menuItems[2])
console.log(menuItems.length)
console.log(menuItems[menuItems.length - 1])

// Exercise 2: Update the waiting list
console.log('\n=== Exercise 2: Update the waiting list ===')
const waitingCustomers = ['Aisha', 'Omar', 'Noor']

waitingCustomers[1] = 'Ali'
waitingCustomers.push('Dana')
console.log(waitingCustomers.length)
const removedCustomer = waitingCustomers.pop()
console.log(removedCustomer)
console.log(waitingCustomers)

// Exercise 3: Print a numbered menu
console.log('\n=== Exercise 3: Print a numbered menu ===')
const drinks = ['Water', 'Tea', 'Coffee', 'Juice']

for (let i = 0; i < drinks.length; i++) {
  console.log(`${i + 1}. ${drinks[i]}`)
}

// Exercise 4: Calculate the prices
console.log('\n=== Exercise 4: Calculate the prices ===')
const prices = [2, 5, 3, 6, 4]
let totalPrice = 0
let expensiveItemCount = 0

prices.forEach((price) => {
  totalPrice += price

  if (price >= 4) {
    expensiveItemCount++
  }
})

console.log(`Total price: ${totalPrice}`)
console.log(`Items costing 4 or more: ${expensiveItemCount}`)

// Exercise 5: Describe the cafe
console.log('\n=== Exercise 5: Describe the cafe ===')
const cafe = {
  name: 'Campus Café',
  location: 'Building A',
  seats: 24,
  isOpen: true,
}

console.log(`${cafe.name} is located in ${cafe.location}.`)
console.log(`Available seats: ${cafe.seats}`)

// Exercise 6: Update a drink
console.log('\n=== Exercise 6: Update a drink ===')
const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
}

drink.size = 'large'
drink.price = drink.price + 1
drink.isAvailable = true
delete drink.temporaryCode
console.log(drink)

// Exercise 7: Check an order
console.log('\n=== Exercise 7: Check an order ===')
const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: false,
}

order.orderTotal = order.price * order.quantity
console.log(
  `${order.customerName} ordered ${order.quantity} ${order.itemName} items.`
)
console.log(`Order total: ${order.orderTotal}`)

if (order.isPaid) {
  console.log('Ready to prepare')
} else {
  console.log('Waiting for payment')
}

order.isPaid = true

if (order.isPaid) {
  console.log('Ready to prepare')
} else {
  console.log('Waiting for payment')
}

// Exercise 8: Plan a study session
console.log('\n=== Exercise 8: Plan a study session ===')
const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
}

console.log(studySession.topics[0])
studySession.topics.push('Objects')
console.log(studySession.topics.length)
studySession.topics.forEach((topic) => {
  console.log(topic)
})
studySession.room = 'Lab 3'
console.log(`${studySession.title} will take place in ${studySession.room}.`)
console.log(studySession.topics)

// Exercise 9: Manage the products
console.log('\n=== Exercise 9: Manage the products ===')
const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
]

console.log(products[1].name)
products[1].price = 5
products.push({ name: 'Juice', price: 3 })

products.forEach((product) => {
  console.log(`${product.name} costs ${product.price} BD.`)
})

// Exercise 10: Check the study group
console.log('\n=== Exercise 10: Check the study group ===')
const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
}

console.log(studyGroup.name)
console.log(studyGroup.members.length)
let completedCount = 0

studyGroup.members.forEach((member) => {
  if (member.completedHomework) {
    completedCount++
  } else {
    console.log(`${member.name} needs to finish the homework.`)
  }
})

console.log(`Completed homework: ${completedCount}`)

// Exercise 11: A reusable price calculator
console.log('\n=== Exercise 11: A reusable price calculator ===')
function calculateTotal(itemPrices) {
  let total = 0

  for (let i = 0; i < itemPrices.length; i++) {
    total += itemPrices[i]
  }

  return total
}

console.log(calculateTotal([2, 5, 3]))
console.log(calculateTotal([4, 4]))
console.log(calculateTotal([7]))
console.log(calculateTotal([]))

// Exercise 12: Give the bill a method
console.log('\n=== Exercise 12: Give the bill a method ===')
const bill = {
  customerName: 'Noor',
  items: [
    { name: 'Tea', price: 2, quantity: 2 },
    { name: 'Sandwich', price: 4, quantity: 1 },
    { name: 'Cookie', price: 1, quantity: 3 },
  ],
  getTotal() {
    let total = 0

    for (let i = 0; i < bill.items.length; i++) {
      total += bill.items[i].price * bill.items[i].quantity
    }

    return total
  },
}

console.log(bill.getTotal())

bill.items.push({
  name: 'Water',
  price: 1,
  quantity: 2,
})

console.log(bill.getTotal())