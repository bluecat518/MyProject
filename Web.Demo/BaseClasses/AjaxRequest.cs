using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Specialized;

namespace Web.Demo.BaseClasses
{
    public class AjaxRequest
    {
        private Dictionary<int, string> m_DictionaryParamsData = new Dictionary<int, string>();
        private AjaxParameter m_AjaxParameter;
        private int m_Count = 0;

        #region 属性
        /// <summary>
        /// 是否是一个Ajax请求。
        /// </summary>
        public bool IsAjaxRequest { get; private set; }

        /// <summary>
        /// 请求的方法名字。
        /// </summary>
        public string MethodName { get; private set; }

        /// <summary>
        /// 参数数据。
        /// </summary>
        public AjaxParameter Parameters
        {
            get { return this.m_AjaxParameter; }
        }
        #endregion

        #region 构造函数
        private AjaxRequest(NameValueCollection nameValueCollection)
        {
            this.IsAjaxRequest = nameValueCollection["isAjaxRequest"] == "true";
            if (this.IsAjaxRequest)
            {
                this.MethodName = nameValueCollection["MethodName"];

                foreach (string value in nameValueCollection)
                {
                    string formKey = string.Format("param{0}", this.m_Count);
                    if (nameValueCollection[formKey] != null)
                    {
                        this.m_DictionaryParamsData.Add(this.m_Count, nameValueCollection[formKey]);
                        this.m_Count++;
                    }
                }
                m_AjaxParameter = new AjaxParameter(this.m_DictionaryParamsData);
            }
        }

        #endregion

        #region 实例方法
        public static AjaxRequest GetInstance(NameValueCollection nameValueCollection)
        {
            return new AjaxRequest(nameValueCollection);
        }
        #endregion

        #region ToString
        public override string ToString()
        {
            return this.MethodName;
        }
        #endregion
    }
}