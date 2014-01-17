using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Demo.BaseClasses
{
    public class AjaxBase:System.Web.UI.Page
    {
        /// <summary>
        /// 是否是一个ajax请求。
        /// </summary>
        public bool IsAjaxRequest { get; private set; }

        /// <summary>
        ///  如果是Ajax请求，劫持页面生命周期的PreInit的事件，直接返回Response
        /// </summary>
        protected override void OnPreInit(EventArgs e)
        {
            AjaxRequest ajaxRequest = AjaxRequest.GetInstance(Request.Form);
            this.IsAjaxRequest = ajaxRequest.IsAjaxRequest;

            if (this.IsAjaxRequest)
            {
                AjaxApplication ajaxApplication = new AjaxApplication(this, ajaxRequest);
                ajaxApplication.EndRequest();
            }
            else
            {
                // 如果不是Ajax请求，继续执行页面生命周期的剩余事件
                base.OnPreInit(e);
            }
        }

    }
}