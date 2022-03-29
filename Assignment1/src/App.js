import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image1 from '../src/images/image1.jpg'
import image2 from '../src/images/image2.jpg'
function App() {
  return (
    <>

      <div className="container">

        {/* header */}
        <div className="container bg-dark text-white mt-2 pt-5 p-3 rounded-2 ">
          <div className="text-left title-text">
            <h3 className="fw-bold" >Title of a longer<br />Featurred Blog Post</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendlit. Laboriosam temporibus sit enim vitae magni, dolorum aperiam dolore reiciendis deserunt iure! </p>
            <p>Continue Reading...</p>
          </div>
        </div>


        {/* cards */}

        <div className="d-flex card-box justify-content-between mt-3 ">
          {/* card1 */}
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={image1} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={image2} className="card-img" alt="..." />
              </div>
              di
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cards End */}

        {/* Main Content start */}

        <main className="d-flex flex-direction justify-content-between">

          <section className="w-70 s2-w pb-3">
            <h3>From the Firehose</h3>
            <hr />
            <h1>Sample Blog Post</h1>
            <h6>Feb 14, 2020 by <a className="text-blue" >Shahzaib</a></h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quos delectus! Perferendis at ratione architecto. Autem, eaque, id nisi provident quos voluptas eum velit vero esse reprehenderit ducimus ad perspiciatis.</p>
            <hr />
            <p>Lorem ipsum dolor, sit amet. Voluptatibus dolores sunt facilis eveniet, numquam repudiandae perspiciatis, itaque ipsam non explicabo recusandae! Alias quam, non harum odio consequatur incidunt similique dicta!</p>
            <p>Lorem ipsum dolor sit amet <b>consectetur adipisicing</b>  adipisicing elit. Labore, ea ut iure, possimus quidem odio quisquam dicta reiciendis commodi eveniet eligendi optio facilis distinctio maximelit. Labore excepturi mollitia, similique officiis facere dolore? Eaque corporis<a href="">consectetur adipisicing elit</a> explicabo voluptatibus asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ea ut iure, possimus quidem odio quisquam dicta reiciendis commodi eveniet eligendi optio facilis distinctio maxime.</p>
            <hr />
            <h1>Heading</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quam tempore illum aliquid ducimus, magni eum voluptates adipisci quas rerum delectus vel consequuntur dicta nulla amet possimus omnis modi? Culpa reprehenderit magnam cupiditate dolores veniam!</p>
            <h2>Sub-Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo perferendis a labore nemo consequatur, odit modi rerum vel. Delectus <br /> tempore tempora sed deserunt tenetur? <br /><br /> Totam rem delectus nulla eaque consequatur aut exercitationem necessitatibus quod!</p>
            <h2>Sub-Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident dolorum consequatur autem. Accusantium obcaecati atque sequi ipsam ratione laudantium!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sed, ut incidunt reiciendis placeat minus reprehenderit laudantium? Quos, pariatur illo earum assumenda blanditiis itaque, soluta corrupti beatae doloribus quaerat possimus!</p>
            <p>
              <ul>
                <li>consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit</li>
                <li>delectus vel consequuntur</li>
              </ul>
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, qui pariatur illo earum assumenda blanditiis itaque?</p>
            <p>
              <ol>
                <li>consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit</li>
                <li>delectus vel consequuntur</li>
              </ol>
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non impedit quam, adipisci voluptatem iusto sequi.</p>
            <br />
            <h1>Another Blog Post</h1>
            <h6>Feb 14, 2020 by <a className="text-blue" >Shahzaib</a></h6>
            <p>Lorem ipsum dolor, sit amet. Voluptatibus dolores sunt facilis eveniet, numquam repudiandae perspiciatis, itaque ipsam non explicabo recusandae! Alias quam, non harum odio consequatur incidunt similique dicta!</p>
            <p>Lorem ipsum dolor sit amet <b>consectetur adipisicing</b>  adipisicing elit. Labore, ea ut iure, possimus quidem odio quisquam dicta reiciendis commodi eveniet eligendi optio facilis distinctio maximelit. Labore excepturi mollitia, similique officiis facere dolore? Eaque corporis<a href="">consectetur adipisicing elit</a> explicabo voluptatibus asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, ea ut iure, possimus quidem odio quisquam dicta reiciendis commodi eveniet eligendi optio facilis distinctio maxime.</p>
            <br />
            <h1>New Feature</h1>
            <h6>Feb 14, 2020 by <a className="text-blue" >Shahzaib</a></h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident dolorum consequatur autem. Accusantium obcaecati atque sequi ipsam ratione laudantium!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sed, ut incidunt reiciendis placeat minus reprehenderit laudantium? Quos, pariatur illo earum assumenda blanditiis itaque, soluta corrupti beatae doloribus quaerat possimus!</p>
            <p>
              <ul>
                <li>consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit</li>
                <li>delectus vel consequuntur</li>
              </ul>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident dolorum consequatur autem. Accusantium obcaecati atque sequi ipsam ratione laudantium!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sed, ut incidunt reiciendis placeat minus reprehenderit laudantium? Quos, pariatur illo earum assumenda blanditiis itaque, soluta corrupti beatae doloribus quaerat possimus!</p>

            <button type="button" class="btn btn1 btn-outline-dark mr-3 rounded-6">Older</button>
            <button type="button" class="btn btn-outline-primary">New</button>


          </section>


          {/* side Bar */}
          <section className="s1-w w-md-38">
            <div className="about ml-2">
              <span><h3>About</h3></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus rerum vero beatae, eaque rem hic audantium eum adipisci nulla earum.
            </div>
            <div className="archive">
              <h4 className="fw-bold mt-3">Archives</h4>
              <ul>
                <li><a href="#">March 23, 2020</a></li>
                <li><a href="#">February12, 2020</a></li>
                <li><a href="#">October 23, 2021</a></li>
                <li><a href="#">January 2,2020</a></li>
                <li><a href="#">November 19, 2021</a></li>
                <li><a href="#">January 28, 2021</a></li>
                <li><a href="#">April 4, 2020</a></li>
                <li><a href="#">May 2, 2020</a></li>
              </ul>
              <h4 className="fw-bold mt-3">Elsewhere</h4>
              <ul>
                <li><a href="#">HitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>

            </div>



          </section>

        </main>

      </div>
    </>
  );
}

export default App;
