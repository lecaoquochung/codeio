#region Using

using System;
using System.ComponentModel;

#endregion

namespace SmartAdmin.Helpers
{
    /// <summary>
    ///     Provides utility methods for converting string values to other data types.
    /// </summary>
    public static class StringExtensions
    {
        /// <summary>
        ///     Removes dashes ("-") from the given object value represented as a string and returns an empty string ("")
        ///     when the instance type could not be represented as a string.
        ///     <para>
        ///         Note: This will return the type name of given isntance if the runtime type of the given isntance is not a
        ///         string!
        ///     </para>
        /// </summary>
        /// <param name="value">The object instance to undash when represented as its string value.</param>
        /// <returns></returns>
        public static string UnDash(this object value)
        {
            return (value as string ?? string.Empty).UnDash();
        }

        /// <summary>
        ///     Removes dashes ("-") from the given string value.
        /// </summary>
        /// <param name="value">The string value that optionally contains dashes.</param>
        /// <returns></returns>
        public static string UnDash(this string value)
        {
            return (value ?? string.Empty).Replace("-", string.Empty);
        }

        /// <summary>
        ///     Checks whether a string value is null or empty.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> is null or is a zero-length string (""); otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsEmpty(this string value)
        {
            return string.IsNullOrEmpty(value);
        }

        /// <summary>
        ///     Converts a string to an integer.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        public static int AsInt(this string value)
        {
            return value.AsInt(0);
        }

        /// <summary>
        ///     Converts a string to an integer and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">The value to return if <paramref name="value" /> is null or is an invalid value.</param>
        public static int AsInt(this string value, int defaultValue)
        {
            int result;
            if (!int.TryParse(value, out result))
                return defaultValue;
            return result;
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.Decimal" /> number.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        public static decimal AsDecimal(this string value)
        {
            return value.As<decimal>();
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.Decimal" /> number and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">The value to return if <paramref name="value" /> is null or invalid.</param>
        public static decimal AsDecimal(this string value, decimal defaultValue)
        {
            return value.As(defaultValue);
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.Single" /> number.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        public static float AsFloat(this string value)
        {
            return value.AsFloat(0.0f);
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.Single" /> number and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">The value to return if <paramref name="value" /> is null.</param>
        public static float AsFloat(this string value, float defaultValue)
        {
            float result;
            if (!float.TryParse(value, out result))
                return defaultValue;
            return result;
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.DateTime" /> value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        public static DateTime AsDateTime(this string value)
        {
            return value.AsDateTime(new DateTime());
        }

        /// <summary>
        ///     Converts a string to a <see cref="T:System.DateTime" /> value and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">
        ///     The value to return if <paramref name="value" /> is null or is an invalid value. The default
        ///     is the minimum time value on the system.
        /// </param>
        public static DateTime AsDateTime(this string value, DateTime defaultValue)
        {
            DateTime result;
            if (!DateTime.TryParse(value, out result))
                return defaultValue;
            return result;
        }

        /// <summary>
        ///     Converts a string to a strongly typed value of the specified data type.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <typeparam name="TValue">The data type to convert to.</typeparam>
        public static TValue As<TValue>(this string value)
        {
            return value.As(default(TValue));
        }

        /// <summary>
        ///     Converts a string to a Boolean (true/false) value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        public static bool AsBool(this string value)
        {
            return value.AsBool(false);
        }

        /// <summary>
        ///     Converts a string to a Boolean (true/false) value and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">The value to return if <paramref name="value" /> is null or is an invalid value.</param>
        public static bool AsBool(this string value, bool defaultValue)
        {
            bool result;
            if (!bool.TryParse(value, out result))
                return defaultValue;
            return result;
        }

        /// <summary>
        ///     Converts a string to the specified data type and specifies a default value.
        /// </summary>
        /// <returns>
        ///     The converted value.
        /// </returns>
        /// <param name="value">The value to convert.</param>
        /// <param name="defaultValue">The value to return if <paramref name="value" /> is null.</param>
        /// <typeparam name="TValue">The data type to convert to.</typeparam>
        public static TValue As<TValue>(this string value, TValue defaultValue)
        {
            try
            {
                var converter1 = TypeDescriptor.GetConverter(typeof(TValue));
                if (converter1.CanConvertFrom(typeof(string)))
                    return (TValue) converter1.ConvertFrom(value);
                var converter2 = TypeDescriptor.GetConverter(typeof(string));
                if (converter2.CanConvertTo(typeof(TValue)))
                    return (TValue) converter2.ConvertTo(value, typeof(TValue));
            }
            catch
            {
                // ignored
            }
            return defaultValue;
        }

        /// <summary>
        ///     Checks whether a string can be converted to the Boolean (true/false) type.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsBool(this string value)
        {
            bool result;
            return bool.TryParse(value, out result);
        }

        /// <summary>
        ///     Checks whether a string can be converted to an integer.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsInt(this string value)
        {
            int result;
            return int.TryParse(value, out result);
        }

        /// <summary>
        ///     Checks whether a string can be converted to the <see cref="T:System.Decimal" /> type.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsDecimal(this string value)
        {
            return value.Is<decimal>();
        }

        /// <summary>
        ///     Checks whether a string can be converted to the <see cref="T:System.Single" /> type.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsFloat(this string value)
        {
            float result;
            return float.TryParse(value, out result);
        }

        /// <summary>
        ///     Checks whether a string can be converted to the <see cref="T:System.DateTime" /> type.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The string value to test.</param>
        public static bool IsDateTime(this string value)
        {
            DateTime result;
            return DateTime.TryParse(value, out result);
        }

        /// <summary>
        ///     Checks whether a string can be converted to the specified data type.
        /// </summary>
        /// <returns>
        ///     true if <paramref name="value" /> can be converted to the specified type; otherwise, false.
        /// </returns>
        /// <param name="value">The value to test.</param>
        /// <typeparam name="TValue">The data type to convert to.</typeparam>
        public static bool Is<TValue>(this string value)
        {
            var converter = TypeDescriptor.GetConverter(typeof(TValue));

            try
            {
                if (value != null)
                {
                    if (!converter.CanConvertFrom(typeof(string)))
                        return false;
                }
                converter.ConvertFrom(value);
                return true;
            }
            catch
            {
                // ignored
            }

            return false;
        }
    }
}