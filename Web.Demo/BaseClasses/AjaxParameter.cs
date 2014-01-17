using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Demo.BaseClasses
{
    public class AjaxParameter
    {
        private IDictionary<int, string> m_DictionaryParamsData = new Dictionary<int, string>();

        /// <summary>
        /// 返回参数的个数。
        /// </summary>
        public int Count
        {
            get
            {
                return this.m_DictionaryParamsData.Count;
            }
        }

        /// <summary>
        /// 索引具体参数的值。
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public string this[int index]
        {
            get
            {
                if (index >= 5 || index < 0)
                {
                    throw new NotSupportedException("请求方法的参数的个数限制为：0-5");
                }
                return this.m_DictionaryParamsData[index];
            }
        }

        public AjaxParameter(IDictionary<int, string> paramsData)
        {
            this.m_DictionaryParamsData = paramsData;
        }
    }
}