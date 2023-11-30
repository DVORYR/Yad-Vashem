using BL;
using DAL;
using DTO;
using AutoMapper;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddAutoMapper(typeof(AutoMapping));

builder.Services.AddScoped<IVisitTimeDAL, VisitTimeDAL>();
builder.Services.AddScoped<IVisitTimeBL, VisitTimeBL>();
builder.Services.AddControllers();

// Configure Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo 
    {
        Title = "Your API Name",
        Version = "v1"
    });
});
builder.Services.AddCors();
var app = builder.Build();

// Enable middleware to serve generated Swagger as a JSON endpoint.
app.UseSwagger();

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
app.UseSwaggerUI(c => {
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name V1");
    c.RoutePrefix = "swagger";
});
{
 app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
}
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapRazorPages();
});

app.Run();