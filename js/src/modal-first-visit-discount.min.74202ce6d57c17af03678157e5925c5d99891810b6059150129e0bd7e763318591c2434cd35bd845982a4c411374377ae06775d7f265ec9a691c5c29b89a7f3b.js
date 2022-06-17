const checkIfFirstVisit=()=>{const a=document.createElement('div');a.innerHTML=`
  <div class="modal fade" id="modal-first-visit" tabindex="-1" role="dialog" aria-label="Downloads" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header d-block">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="text-center modal-title">
            <h2>Buy CoreUI PRO now and save 75%</h2>
            <h3 class="text-danger">This is one-time offer!</h3>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-7 d-flex align-items-center">
              <div>
                <img src="/images/mockups/mockup_3_1_free.webp" class="img-fluid" alt="Bootstrap Admin Panel Template" loading="lazy">
              </div>
            </div>
            <div class="col-md-5">
              <p>Get a PRO plan to access advanced features, professional support, and support CoreUI development.</p>
              <ul class="list-unstyled">
                <li class="py-2">✅ Save thousands of dollars for UI and UX designing.</li>
                <li class="py-2">✅ Human tech support provided by CoreUI Core Team Developers.</li>
                <li class="py-2">✅ PRO Components: Date Picker, Multi Select, Smart Table, etc.</li>
              </ul>
              <h3 class="text-danger text-center mb-3">Use code CDITFDSF at checkout.</h3>
              <a href="/pricing/" class="hexagon-btn heaxagon-btn-cta-yellow button" style="max-width: 100%;">
                <div class="hexagon-body-left-arrow"></div>
                <div class="hexagon-body-right-arrow"></div>
                <div class="hexagon-body">Buy now and save up to $749</div>
              </a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
        <div class="text-center">
        <div class="text-uppercase mb-3 row">
        <div class="col-md-9 mx-auto">
        <strong>You’re in good company. <span class="text-muted">CoreUI powers thousands of apps at some of the smartest companies around the world.</span></strong>
        </div>
        </div>
        <div class="row">
        <div class="col">
        <img class="img-fluid" src="/images/clients/nvidia600.png" alt="Nvidia">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/ea600.png" alt="EA">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/dhl600.png" alt="DHL">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/olx600.png" alt="OLX">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/citi600.png" alt="Citi">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/paypal600.png" alt="PayPal">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/virgin-media600.png" alt="Virgin">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/plus500600.png" alt="Plus500">
        </div>
        <div class="col">
        <img class="img-fluid" src="/images/clients/cisco600.png" alt="Cisco">
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div> 
  `,document.body.appendChild(a),setTimeout(()=>{const a=new coreui.Modal(document.getElementById('modal-first-visit'));a.toggle(),setCookie('firstVisit',!0,365)},2500)};window.onload=function(){getCookie('firstVisit')!=='true'&&checkIfFirstVisit()}