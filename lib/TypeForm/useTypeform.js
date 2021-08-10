import { useEffect } from 'react'

const useTypeForm = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    // script.async = true
    script.innerHTML = `(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export default useTypeForm
