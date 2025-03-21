using Application.Core;
using Application.Properties.Queries;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// adding sqlite as db context
builder.Services.AddDbContext<EstateChainDbContext>(opt => 
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// adding Mediatr
builder.Services.AddMediatR(opt => 
    opt.RegisterServicesFromAssemblyContaining<GetPropertyList>()
);

// adding AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);

// adding CORS
builder.Services.AddCors();

var app = builder.Build();

// adding CORS to the pipeline
app.UseCors(opt => opt.AllowAnyHeader().AllowAnyMethod()
    .WithOrigins("http://localhost:3000", "https://localhost:3000"));

app.MapControllers();

// SERVICE LOCATOR PATTERN (to access AppDbContext in Program.cs via Dependency Injection)
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<EstateChainDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while migrating the database.");
}

app.Run();
