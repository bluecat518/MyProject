using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Utils
{
    public static class ExtensionMethods
    {
        // returns the number of milliseconds since Jan 1, 1970 (useful for converting C# dates to JS dates)
        public static double UnixTicks(this DateTime dt)
        {
            DateTime d1 = new DateTime(1970, 1, 1); DateTime d2 = dt.ToUniversalTime();
            TimeSpan ts = new TimeSpan(d2.Ticks - d1.Ticks);
            return ts.TotalMilliseconds;
        }

        public static DateTime ConvertTime(long time)
        {
            DateTime timeStamp = new DateTime(1970, 1, 1); //得到1970年的时间戳
            long t = (time + 8 * 60 * 60) * 10000000 + timeStamp.Ticks;
            DateTime dt = new DateTime(t);
            return dt;
        }

        public static DateTime ConvertToDateTime(double d)
        {
            System.DateTime time = System.DateTime.MinValue;
            System.DateTime startTime = TimeZone.CurrentTimeZone.ToLocalTime(new System.DateTime(1970, 1, 1));
            time = startTime.AddMilliseconds(d);
            return time;
        }
    }
}
