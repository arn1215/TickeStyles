

const Card = ({ name, description, startTime, images, userId }) => {
  return (
    <div className="p-6">
      <div class="card card-compact w-96 bg-base-100 hover:animate-pulse shadow-lg transition-all">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">name</h2>
          <p>Description</p>
          <div class="card-actions justify-end">
            <button class="btn-secondary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card