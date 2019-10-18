import React from "react"
import { Link } from "gatsby"
import Title from "../Global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              gravida ac justo eu laoreet. Etiam vehicula vel elit sed tempor.
              Vivamus molestie, odio a elementum tempor, augue justo
              sollicitudin lorem, id rhoncus odio justo nec velit. Nulla eu
              accumsan nisi. Nunc a quam libero. Vivamus placerat odio eu
              consequat rutrum. Donec aliquet fermentum egestas. Praesent vitae
              hendrerit erat. Nulla luctus consectetur erat ultricies hendrerit.
              Duis tristique, nunc eleifend laoreet bibendum, libero tortor
              hendrerit diam, eget ultrices metus ligula eget lorem. Nulla
              rutrum mattis elementum. Ut auctor mi vitae accumsan varius.
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow text-uppercase">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
