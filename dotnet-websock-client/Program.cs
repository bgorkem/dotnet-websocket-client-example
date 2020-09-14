using System;
using System.Threading;
using System.Threading.Tasks;
using Websocket.Client;

namespace dotnet_websock_client
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Connecting via websockets ...");

            var exitEvent = new ManualResetEvent(false);
            var url = new Uri("ws://localhost:3000");

            using (var client = new WebsocketClient(url))
            {
                client.ReconnectTimeout = TimeSpan.FromSeconds(30);
                client.ReconnectionHappened.Subscribe(info =>
                    Console.WriteLine($"Reconnection happened, type: {info.Type}"));

                client.MessageReceived.Subscribe(OnMessageReceived);
                client.Start();


                Console.WriteLine("Sending image file...");
                Task.Run(() => client.Send(LoadImage()));


                exitEvent.WaitOne();
            }
        }

        static byte[] LoadImage()
        {
            return System.IO.File.ReadAllBytes("./apple.jpg");
        }

        static void OnMessageReceived(ResponseMessage message)
        {
            Console.WriteLine($"Message received: {message}");
            // you can do anything here..
        }
    }
}
